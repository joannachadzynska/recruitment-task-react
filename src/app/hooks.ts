import { RefObject, useCallback, useEffect, useMemo, useState } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useOnClickOutside = <T extends HTMLElement = HTMLElement>(
    ref: RefObject<T>,
    handler: (event: Event) => void
): void => {
    useEffect(
        () => {
            const listener = (event: Event) => {
                // Do nothing if clicking ref's element or descendent elements
                const el = ref?.current;
                if (!el || el.contains((event?.target as Node) || null)) {
                    return;
                }
                handler(event); // Call the handler only if the click is outside of the element passed.
            };

            document.addEventListener("mousedown", listener);
            document.addEventListener("touchstart", listener);

            return () => {
                document.removeEventListener("mousedown", listener);
                document.removeEventListener("touchstart", listener);
            };
        },
        [ref, handler] // Reload only if ref or handler changes
    );
};

export interface Pagination {
    totalCount: number;
    pageSize: number;
    siblingCount: number;
    currentPage: number;
}

export const DOTS = "...";

const range = (start: number, end: number) => {
    let length = end - start;
    return Array.from({ length }, (_, i) => start + i);
};

export const usePagination = ({
    totalCount,
    pageSize,
    siblingCount = 1,
    currentPage,
}: Pagination) => {
    const paginationRange = useMemo(() => {
        const totalPageCount = Math.ceil(totalCount / pageSize);

        // pages count is determined as siblingCount + firstPage + lastPage + currentPage + 2*DOTS
        const totalPageNumbers = siblingCount + 5; // 5 is the number of pages to show before and after current page

        /**
         * Case 1:
         * If the number of pages is less than the page numbers we want to show in our pagination,
         * we return the range [1..totalPageCount]
         */
        if (totalPageCount <= totalPageNumbers) {
            return [1, totalPageCount];
        }

        /**
         * Calculate the left and right sibling index and make sure they are within the range 1 and totalPageCount
         */
        const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
        const rightSliibingIndex = Math.min(
            currentPage + siblingCount,
            totalPageCount
        );

        /**
         * We do not show dots just when there is just one page number to be inserted between the extremes of sibling
         * and the page limits i.e 1 and totalPageCount. Hence we are using
         * leftSiblingIndex > 2 and rightSliibingIndex < totalPageCount - 2
         */
        const shouldShowLeftDots = leftSiblingIndex > 2; // 2 is the number of pages to show before current page
        const shouldShowRightDots = rightSliibingIndex < totalPageCount - 2; // 2 is the number of pages to show after current page

        const firstPageIndex = 1;
        const lastPageIndex = totalPageCount;

        /**
         * Case 2:
         * No left dots to show, but rights dots to be shown
         */
        if (!shouldShowLeftDots && shouldShowRightDots) {
            let leftItemCount = 3 + 2 * siblingCount;
            let leftRange = range(1, leftItemCount);

            return [...leftRange, DOTS, totalPageCount];
        }

        /**
         * Case 3:
         * No right dots to show, but left dots to be shown
         */
        if (shouldShowLeftDots && !shouldShowRightDots) {
            let rightItemCount = 3 + 2 * siblingCount;
            let rightRange = range(
                totalPageCount - rightItemCount + 1,
                totalPageCount + 1
            );
            return [firstPageIndex, DOTS, ...rightRange];
        }

        /**
         * Case 4:
         * Both left and right dots to be shown
         */
        if (shouldShowLeftDots && shouldShowRightDots) {
            let middleRange = range(leftSiblingIndex, rightSliibingIndex);
            return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
        }
    }, [totalCount, pageSize, siblingCount, currentPage]);

    return paginationRange;
};

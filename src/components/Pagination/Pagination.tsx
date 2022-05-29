import { usePagination, DOTS } from "../../app/hooks";
import { ReactComponent as PrevIcon } from "../../assets/icons/icon-prev.svg";
import { ReactComponent as NextIcon } from "../../assets/icons/icon-next.svg";
import "./Pagination.style.scss";

interface PaginationProps {
    onPageChange: (page: number) => void;
    totalCount: number;
    siblingCount: number;
    currentPage: number;
    pageSize: number;
}

const Pagination: React.FC<PaginationProps> = ({
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
}) => {
    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize,
    });

    if (totalCount < pageSize || currentPage === 0) {
        return null;
    }

    const onNextPage = () => {
        onPageChange(currentPage + 1);
    };
    const onPreviousPage = () => {
        onPageChange(currentPage - 1);
    };

    let lastPage =
        paginationRange && paginationRange[paginationRange.length - 1];

    return (
        <ul className='pagination-container'>
            {/* Left navigation arrow */}
            <li
                key={"previous"}
                onClick={onPreviousPage}
                className={
                    currentPage === 1
                        ? "pagination-item disabled"
                        : "pagination-item"
                }>
                <PrevIcon className='arrow' />
            </li>

            {/*  Middle range buttons */}
            {paginationRange &&
                paginationRange.map((page, idx) => {
                    if (page === DOTS) {
                        return (
                            <li
                                className='pagination-item dots'
                                key={page + idx}>
                                &#8230;
                            </li>
                        );
                    }

                    return (
                        <li
                            key={`page ${idx}`}
                            onClick={() => onPageChange(+page)}
                            className={
                                page === currentPage
                                    ? "pagination-item selected"
                                    : "pagination-item"
                            }>
                            {page}
                        </li>
                    );
                })}

            {/* Right navigation arrow */}
            <li
                key={"next"}
                onClick={onNextPage}
                className={
                    currentPage === lastPage
                        ? "pagination-item disabled"
                        : "pagination-item"
                }>
                <NextIcon className='arrow' />
            </li>
        </ul>
    );
};

export default Pagination;

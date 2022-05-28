import { useState } from "react";
import { Modal } from "../../components";
import "./About.style.scss";
import authorAvatar from "../../assets/images/jc.png";
import { ReactComponent as LinkedinIcon } from "../../assets/icons/icon-linkedin.svg";
import { ReactComponent as GithubIcon } from "../../assets/icons/icon-github.svg";

const About: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => setIsModalOpen(!isModalOpen);

    return (
        <div className='about-app'>
            <h2 className='about-app__title'>Wymagania dotyczące aplikacji</h2>
            <p className='about-app__description'>
                Napisz aplikację korzystając z najnowszego api react.js (hooki,
                Context, itd.) spełniającą poniższe założenia.
            </p>
            <div className='about-app__requirement'>
                Aplikacja ma się składać z minimum 3 ekranów:
                <ol>
                    <li>Wyszukiwarka projektów githubowych</li>
                    <li>Założenia całej aplikacji</li>
                    <li>Wyliczanie silni</li>
                </ol>
            </div>
            <div className='about-app__requirement'>
                Ad 1:
                <ul>
                    <li>Wykorzystane jest publiczne API Githuba</li>
                    <li>
                        Czeka na podanie loginu użytkownika:
                        <ul>
                            <li>waliduje poprawność</li>
                            <li>bsługuje nieistniejące loginy</li>
                        </ul>
                    </li>
                    <li>
                        Wyświetla maksymalnie 5 projektów w kolejności od
                        ostatnio updatowanego:
                        <ul>
                            <li>
                                wyświetla maksymalnie 5 commitów każdego z
                                projektów;
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className='about-app__requirement'>
                Ad 2:
                <ul>
                    <li>
                        wyświetla niniejszą treść (listę wymagań) z podobnym
                        (takim samym) podziałem i układem
                    </li>
                    <li>
                        proszę zawrzeć też autora aplikacji - własne imię i
                        nazwisko
                    </li>
                </ul>
            </div>
            <div>
                Ad 3:
                <ul>
                    <li>
                        input do podania liczby dla której będzie wyliczona
                        silnia
                    </li>
                    <li>historia poprzednich wyliczeń</li>
                </ul>
            </div>
            <div className='about-app__requirement'>
                Ogólne:
                <ul>
                    <li>
                        korzysta z <strong>LESS / SASS</strong>. Spełnia wymogi{" "}
                        <strong>BEM</strong>. Jest też{" "}
                        <strong>estetyczna</strong>
                    </li>
                    <li>
                        wyświetla co drugi element każdej listy wyróżnionym
                        kolorem
                    </li>
                    <li>
                        jest <strong>hostowana</strong> (github pages, heroku,
                        itd..), a jej kod jest dostępny publicznie
                    </li>
                </ul>
            </div>
            <div className='about-app__requirement'>
                Miło widziane użycie <strong>middlewarów reduxowych</strong>.
            </div>

            <button className='about-me-btn' onClick={toggleModal}>
                O Autorze
            </button>
            <Modal isOpen={isModalOpen} handleClose={toggleModal}>
                <div className='author'>
                    <div className='author__avatar'>
                        <img src={authorAvatar} alt='Joanna Chądzyńska' />
                    </div>
                    <h3 className='author__name'>Joanna Chądzyńska</h3>
                    <div className='author__links'>
                        <a
                            className='link linkedin'
                            href='https://pl.linkedin.com/in/joanna-ch%C4%85dzy%C5%84ska?trk=profile-badge'
                            target='_blank'
                            rel='noopener noreferrer'>
                            <LinkedinIcon />
                        </a>
                        <a
                            className='link github'
                            href='https://github.com/joannachadzynska'
                            target='_blank'
                            rel='noopener noreferrer'>
                            <GithubIcon />
                        </a>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default About;

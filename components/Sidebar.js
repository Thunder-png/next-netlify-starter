// components/Sidebar.js
import React from 'react';
import Link from 'next/link';

const Sidebar = () => {
    return (
        <aside className="side-navbar">
            <nav>
                <ul className="nav-list">
                    {/* Ana menü */}
                    <li>
                        <h5 className="menu-title">Ana Menü</h5>
                        <ul className="submenu">
                            <li>
                                <Link href="/">
                                    <a>
                                        <i className="fa-solid fa-house"></i> Ana Sayfa
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/haberler">
                                    <a>
                                        <i className="far fa-newspaper"></i> Haberler
                                    </a>
                                </Link>
                            </li>
                        </ul>
                        <hr className="sidebar-divider" />
                    </li>
                    {/* Oyun menüsü */}
                    <li>
                        <h5 className="menu-title">Oyun</h5>
                        <ul className="submenu">
                            <li>
                                <Link href="/ajanlar">
                                    <a>
                                        <i className="fas fa-user-friends"></i> Ajanlar
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/silahlar">
                                    <a>
                                        <i className="fas fa-crosshairs"></i> Silahlar
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/paketler">
                                    <a>
                                        <i className="fas fa-layer-group"></i> Koleksiyon
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/savasbileti">
                                    <a>
                                        <i className="fas fa-medal"></i> Savaş Bileti
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/kontratlar">
                                    <a>
                                        <i className="fas fa-dollar-sign"></i> Kontratlar
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/gecepazari">
                                    <a>
                                        <i className="fa-solid fa-hourglass-clock"></i> Gece Pazarı
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/oyuncusesleri">
                                    <a>
                                        <i className="fa-solid fa-folder-music"></i> Oyuncu Sesleri
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/crosshair">
                                    <a>
                                        <i className="fa-solid fa-location-crosshairs"></i> Crosshair
                                    </a>
                                </Link>
                            </li>
                        </ul>
                        <hr className="sidebar-divider" />
                    </li>
                    {/* Bilgi menüsü */}
                    <li>
                        <h5 className="menu-title">Bilgi</h5>
                        <ul className="submenu">
                            <li>
                                <Link href="/support">
                                    <a>
                                        <i className="fas fa-envelope"></i> Destek
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy">
                                    <a>
                                        <i className="fas fa-file-alt"></i> Gizlilik
                                    </a>
                                </Link>
                            </li>
                        </ul>
                        <hr className="sidebar-divider" />
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;


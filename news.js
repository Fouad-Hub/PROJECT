import React from 'react';
import './NewsPage.css';

const NewsPage = () => {
    const news = [
        {
            title: "Game Release 1",
            description: "Exciting new game released today!",
            image: "img/news1.jpg",
        },
        {
            title: "Game Event",
            description: "Upcoming event for fans of RPGs.",
            image: "img/news2.jpg",
        },
        {
            title: "Update Announcement",
            description: "New patch update for popular game.",
            image: "img/news3.jpg",
        },
    ];

    return (
        <div>
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">GameZone</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item"><a className="nav-link" href="index.html">Home</a></li>
                            <li className="nav-item"><a className="nav-link active" href="news.html">News</a></li>
                            <li className="nav-item"><a className="nav-link" href="shop.html">Shop</a></li>
                            <li className="nav-item"><a className="nav-link" href="aboutus.html">About Us</a></li>
                            <li className="nav-item"><a className="nav-link" href="contact.html">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <header className="hero-section">
                <img src="img/HomeScreenBackground-News.jpg" alt="News Background" />
                <div className="overlay"></div>
                <div className="content">
                    <h1>Gaming News</h1>
                    <p>Catch up on the latest in the gaming world</p>
                </div>
            </header>

            {/* News Section */}
            <section className="news py-5">
                <div className="container">
                    <div className="row">
                        {news.map((item, index) => (
                            <div className="col-md-4 text-center mb-4" key={index}>
                                <div className="news-item">
                                    <img src={item.image} className="img-fluid news-image" alt={item.title} />
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer bg-dark text-white py-4">
                <div className="container text-center">
                    <p>&copy; 2024 GameZone. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default NewsPage;

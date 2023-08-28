import CardView from './CardView';
import { Link, Outlet } from 'react-router-dom';
export default function Layout() {
    return (
        <>
            <div className="row">
                <div className="col-2">
                    <img src="https://darshan.ac.in/Content/media/DU_Logo.svg" className="img-fluid" />
                </div>
                <div className="col">
                    <nav className="navbar navbar-expand-lg bg-body-tertiary">
                        <div className="container-fluid">
                            <Link to="./Calculator" className='nav-link active'>Calculator</Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link className="nav-link active" to="./Api2">Student</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="./content" className="nav-link active">Darshan</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="./CardView" className="nav-link active">Faculty</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="./Addstudent" className="nav-link active">Addstudent</Link>
                                    </li>
                                </ul>
                                <form className="d-flex" role="search">
                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button className="btn btn-outline-success" type="submit">Search</button>
                                </form>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            <div className="row">
                <div className="col-9 border">

                    <Outlet />
                </div>
                <div className="col border">
                    SIDEBAR

                </div>
            </div>
            <div className='row'>
                <div className='col border'>
                    <footer class="text-center text-white" style={{backgroundColor:"white"}}>
                        <div class="container pt-4">
                            <section class="mb-4">
                                <a
                                    class="btn btn-link btn-floating btn-lg text-dark m-1"
                                    href="#!"
                                    role="button"
                                    data-mdb-ripple-color="dark"
                                ><i class="fab fa-facebook-f"></i
                                ></a>
                                <a
                                    class="btn btn-link btn-floating btn-lg text-dark m-1"
                                    href="#!"
                                    role="button"
                                    data-mdb-ripple-color="dark"
                                ><i class="fab fa-twitter"></i
                                ></a>
                                <a
                                    class="btn btn-link btn-floating btn-lg text-dark m-1"
                                    href="#!"
                                    role="button"
                                    data-mdb-ripple-color="dark"
                                ><i class="fab fa-google"></i
                                ></a>

                                <a
                                    class="btn btn-link btn-floating btn-lg text-dark m-1"
                                    href="#!"
                                    role="button"
                                    data-mdb-ripple-color="dark"
                                ><i class="fab fa-instagram"></i
                                ></a>
                                <a
                                    class="btn btn-link btn-floating btn-lg text-dark m-1"
                                    href="#!"
                                    role="button"
                                    data-mdb-ripple-color="dark"
                                ><i class="fab fa-linkedin"></i
                                ></a>
                                <a
                                    class="btn btn-link btn-floating btn-lg text-dark m-1"
                                    href="#!"
                                    role="button"
                                    data-mdb-ripple-color="dark"
                                ><i class="fab fa-github"></i
                                ></a>
                            </section>
                        </div>
                        <div class="text-center text-dark p-3" style={{backgroundolor:"rgba(0, 0, 0, 0.2)"}}>
                            © 2020 Copyright:
                            <a class="text-dark" href="https://mdbootstrap.com/">Priyankgodhani.com</a>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    );
}
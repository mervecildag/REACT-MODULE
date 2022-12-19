const app = document.getElementById("app"); 

// NAVBAR FUNCTION START
const renderNav = () => {
    app.innerHTML += `
    <nav class="navbar navbar-expand-lg bg-info m-2 me-3">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><hr class="dropdown-divider"></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled">Disabled</a>
                    </li>
                </ul>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </div>
  </nav>`
}
// NAVBAR FUNCTION END

// 
const renderContent = () => {
     app.innerHTML += `<div class="p-3 mt-4 ms-3 me-4 mb-2 bg-primary text-white">.bg-primary</div>
     <div class="p-3 ms-3 me-4 mb-2 bg-secondary text-white">.bg-secondary</div>
     <div class="p-3 ms-3 me-4 mb-2 bg-success text-white">.bg-success</div>
     <div class="p-3 ms-3 me-4 mb-2 bg-danger text-white">.bg-danger</div>
     <div class="p-3 ms-3 me-4 mb-2 bg-warning text-dark">.bg-warning</div>
     <div class="p-3 ms-3 me-4 mb-2 bg-info text-dark">.bg-info</div>
     <div class="p-3 ms-3 me-4 mb-2 bg-light text-dark">.bg-light</div>`
 }


 const renderFooter = () => {
    app.innerHTML += ` 
    <footer class="d-flex flex-wrap justify-content-between align-items-center m-2 me-3 p-3 border-top bg-dark">
    <p class="col-md-4 mb-0 text-white">© 2022 Company, Inc</p>

    <a href="/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
      <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
    </a>

    <ul class="nav col-md-4 justify-content-end">
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Home</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Features</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Pricing</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">FAQs</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">About</a></li>
    </ul>
  </footer>`
}

export {
    renderNav,
    renderContent,
    renderFooter
}
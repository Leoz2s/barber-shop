export class Router {
  routes = [];
  
  addRoute(routeName, page) {
    this.routes[routeName] = page;
  };

  route(event) {
    event.preventDefault();

    window.history.pushState({}, "", event.target.href);

    this.switchPage();
  };

  switchPage() {
    const {pathname} = window.location;

    const route = this.routes[pathname] || this.routes[404];

    fetch(route)
      .then((data) => data.text())
      .then((html) => document.querySelector("#app").innerHTML = html);
  };
};

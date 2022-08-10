import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { getUser } from "../services/userService.js";


const navTemp = (user) => html`
    <nav>
        <img src="./images/headphones.png">
        <a href="#">Home</a>
        <ul>
            <!--All user-->
            <li><a href="#">Catalog</a></li>
            <li><a href="#">Search</a></li>

            ${user
                ?   html`
                    <!--Only user-->
                    <li><a href="#">Create Album</a></li>
                    <li><a href="#">Logout</a></li>
                `
                :   html`
                    <!--Only guest-->
                    <li><a href="#">Login</a></li>
                    <li><a href="#">Register</a></li>
                `
            }
            
        </ul>
    </nav>
`
const header = document.getElementById('navigator');
const main = document.getElementById('main-content');

function addRender(template) {
    render(template, main);
}

export function navView(ctx, next) {
    ctx.user = getUser();
    render(navTemp(ctx.user), header);
    ctx.render = addRender;
    next();
}
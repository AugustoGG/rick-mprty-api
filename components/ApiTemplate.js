import { LitElement, html} from 'lit';

import style from '../styles/ApiTemplateStyles'

export class ApiTempate extends LitElement {

    static get styles (){
        return [ style ];
    }
    render() {
        return html `
            <div class="container">
                <h1> The <strong class="title">Rick and Morty</strong> API</h1>
                <p class="title">LitElement</p>
            </div>
        `;
    }
}

customElements.define('api-template', ApiTempate);
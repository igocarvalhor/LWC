import { LightningElement, api } from 'lwc';

export default class Oportunidade extends LightningElement {
    @api ide;
    @api name; 
    @api amount;
    @api stage;
}

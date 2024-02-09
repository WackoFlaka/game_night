export class Player {
    constructor(name) {
        this.name = name
        this.score = 0
    }
    
    get PlayerTemplateCard() {
        return /*html*/ `
        <div class="card">
            <div class="card-body d-flex justify-content-between">
              <p class="fs-3">  ${this.name} - ${this.score} </p>
        <div>
            <button onclick="app.PlayersController.increasePoint('${this.name}')" type="button" class="btn btn-success">+</button>
            <button onclick="app.PlayersController.decreasePoint('${this.name}')" type="button" class="btn btn-warning">-</button>
        </div>
            </div>
        </div>
        `
    }
}
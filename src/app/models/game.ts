import { Question } from './question';

export class Game {
    public questions = {};
    public name: string;

    constructor() {
        
    }

    public addCategory(category: string) {
        this.questions[category] =  [];
    }

    public addQuestion(category: string, q: Question) {
        this.questions[category].push(q);
    }

    public getAllCategories() {
        return Object.keys(this.questions);
    }

    public setName(n: string) {
        this.name = n;
    }

}
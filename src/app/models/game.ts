import { Question } from './question';
import { max } from 'rxjs/operators';

export class Game {
    public questions = {};
    public name: string;
    public id: string;

    constructor(questions: any, name: string, id: string) {
        this.questions = questions;
        this.name = name;
        this.id = id;
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

    public getMaxSize() {
        const values = Object.values(this.questions);
        const lengths: number[] = values.map((v: Question[]) => v.length);
        return Math.max.apply(null, lengths);
    }

    public getQuestionAtIndex(c: string, i: number) {
        const arr: Question[] = this.questions[c];
        if (i >= arr.length) {
            return null;
        }
        return arr[i];
    }

}
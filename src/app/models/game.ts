import { Question } from './question';

export class Game {
    categories: string[];
    questions: Map<string, Question[]>;

    constructor() {
        this.categories = [];
        this.questions = new Map<string, Question[]>();

    }

    public addCategory(category: string) {
        this.questions.set(category, []);
    }

    public addQuestion(category: string, q: Question) {
        if (!this.questions.has(category)) {
            throw new Error("Wrong category");
        }
        const questions = this.questions.get(category);
        questions.push(q);
    }
}
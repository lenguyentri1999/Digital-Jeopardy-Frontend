import { Question } from './question';

export class Game {
    public questions: Map<string, Question[]>;

    constructor() {
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

    public getAllCategories() {
        return Array.from(this.questions.keys());
    }
}
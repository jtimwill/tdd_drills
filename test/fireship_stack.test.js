// Note: I created this code while following along with the fireship TDD tutorial. 

class Stack {
    constructor() {
        this.top = -1;
        this.items = {};
    }

    get peek() {
        return this.items[this.top];
    }

    push(value) {
        this.top += 1;
        this.items[this.top] = value;
    }

    pop() {
        const output = this.items[this.top];
        this.top -= 1;
        return output;
    }
}

describe('My Stack', () => {
    let stack;

    beforeEach(() => {
        stack = new Stack();
    });

    it('is created empty', () => {
        expect(stack.top).toBe(-1);
        expect(stack.items).toEqual({});
    });

    it('can push to the top', () => {
        stack.push('🥑');
        expect(stack.top).toBe(0);
        expect(stack.peek).toBe('🥑');
    });

    it('can pop off', () => {
        stack.push('🥑');
        expect(stack.pop()).toBe('🥑')
    });
});
import { writable } from "svelte/store";

export class TestClass {
    protected static instance: TestClass;

    public static getInstance(): TestClass {
        if (!this.instance) {
            this.instance = new TestClass();
        }
        return this.instance;
    }

    public counter = writable(0);
}
import { writable } from "svelte/store";

enum Pages {
    Home = "Home",
    ClickCounter = "Click Counter",
    DynamicInputs = "Dynamic Inputs",
    SystemInfo = "System Info",
    Weather = "Weather",
    Loading = "Loading",
}

class Navigator {
    protected static instance: Navigator;

    public static getInstance(): Navigator {
        if (!this.instance) {
            this.instance = new Navigator();
        }
        return this.instance;
    }

    public previousPage: string = localStorage.getItem("lastOnPage") || null;
    public currentPage: string;
    public page = writable(this.previousPage || Pages.Home);

    public ChangePage(page: string) {
        this.page.set(page);
        localStorage.setItem("lastOnPage", page);
    }

    public GetPage() {
        let retData;
        this.page.subscribe((page) => {
            retData = page;
        });
        return retData;
    }
}

export { Navigator, Pages };
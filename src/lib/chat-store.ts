type Listener = (isOpen: boolean) => void;

class ChatStore {
    private isOpen: boolean = false;
    private listeners: Set<Listener> = new Set();

    getIsOpen() {
        return this.isOpen;
    }

    setIsOpen(value: boolean) {
        this.isOpen = value;
        this.emit();
    }

    toggle() {
        this.isOpen = !this.isOpen;
        this.emit();
    }

    subscribe(listener: Listener) {
        this.listeners.add(listener);
        return () => this.listeners.delete(listener);
    }

    private emit() {
        this.listeners.forEach((l) => l(this.isOpen));
    }
}

export const chatStore = new ChatStore();

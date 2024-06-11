type EmailTimer = {
    email: string;
    timerId: NodeJS.Timeout;
};

interface IQueueData {email: string, department: string}

class EmailQueue {
    private queue: Set<IQueueData>;
    private timers: Map<string, NodeJS.Timeout>;

    constructor() {
        this.queue = new Set();
        this.timers = new Map();
    }

    addToQueue(data: IQueueData): void {
        if (this.queue.has(data)) {
            this.removeFromQueue(data.email);
        }

        this.queue.add(data);
        const timerId = setTimeout(() => {
            this.removeFromQueue(data.email);
        }, 5 * 60 * 1000); // 5 minutes

        this.timers.set(data.email, timerId);
    }

    removeFromQueue(email: string): void {
        for (const data of this.queue) {
            if (data.email === email) {
                this.queue.delete(data);
                break;
            }
        }

        const timerId = this.timers.get(email);
        if (timerId) {
            clearTimeout(timerId);
            this.timers.delete(email);
        }
    }

    isEmailInQueue(email: string): boolean {
        for (const data of this.queue) {
            if (data.email === email) {
                return true;
            }
        }
        return false;
    }

    popLeft(): IQueueData {
        const data = this.queue.values().next().value;
        this.removeFromQueue(data.email);
        return data;
    }
}

export const emailQueue = new EmailQueue();
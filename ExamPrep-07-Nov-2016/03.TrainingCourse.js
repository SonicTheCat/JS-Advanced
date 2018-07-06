class TrainingCourse {
    constructor(title, trainer) {
        this.title = title;
        this.trainer = trainer;
        this.topics = [];
    }

    addTopic(topic, date) {
        let obj = {title: topic, date: date};
        this.topics.push(obj);
        this.topics.sort((obj1, obj2) => obj1.date - obj2.date);

        return this;
    }

    get firstTopic() {
        return this.topics[0];
    }

    get lastTopic() {
        return this.topics.slice(-1)[0];
    }

    toString() {
        let result = `Course "${this.title}" by ${this.trainer}`;
        if (this.topics.length > 0) {
            this.topics.forEach(o => result += `\n * ${o.title} - ${o.date}`);
        } else {
            result += "\n";
        }
        return result;
    }
}

let php = new TrainingCourse("PHP Intro", "Ivan Yonkov")
    .addTopic("Strings", new Date(2017, 2, 16, 18, 0))
    .addTopic("PHP First Steps", new Date(2017, 2, 12, 18, 0))
    .addTopic("Arrays", new Date(2017, 2, 14, 18, 0));
console.log("" + php);



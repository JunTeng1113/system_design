import firebase from "../firebase";

const db = firebase;

class Service {
    getAll() {
        return db.ref();
    }

    get(key) {
        return db.ref(key);
    }
    create(object) {
        return db.ref().push(object);
    }

    update(key, value) {
        return db.ref().child(key).update(value);
    }

    delete(key) {
        return db.ref().child(key).remove();
    }

    deleteAll() {
        return db.ref().remove();
    }
}

export default new Service()
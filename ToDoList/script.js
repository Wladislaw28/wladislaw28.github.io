(function () {
    let tasks = {
            current: [{ //текущие задачи
                taskId: doId(),
                taskContent: "Таск 1",
                taskState: "current" //текущие значение задачи
            }, {
                taskId: doId(),
                taskContent: "Таск 2",
                taskState: "current"
            }],
            done: [{  //выполненные задачи
                taskId: doId(),
                taskContent: "Таск 3",
                taskState: "done"
            }],
            get allTasks() { //возвращает длину массива всего задач
                return this.current.length + this.done.length;
            },
            get doneTasks() { //возвращает длину массива выполнен задач
                return this.done.length;
            }
        },
        tasksList = document.getElementById("app__list"),
        allTasks = document.getElementById("js-all-tasks"),
        doneTasks = document.getElementById("js-done-tasks"),
        addNewTaskField = document.getElementById("app__task-new"); //переменна для поля

    function INIT() { //инициализир. и отрисовывает список по-умолчанию
        for (const item of tasks.current) {
            createItem(item);//к каждому эл применяется ф-ция createItem
        }
        for (const item of tasks.done) {
            createItem(item);
        }
        allTasks.innerHTML = tasks.allTasks; //устанавлив значение общих задач
        doneTasks.innerHTML = tasks.doneTasks; //устанавлив значение выполнен задач
    }

    function createItem(el) {
        let item = document.createElement('li'),
            remove = document.createElement('div'),
            text = document.createElement('span');
        remove.classList.add('app__list-remove');//вешаем на эл удаление нужный класс
        remove.addEventListener('click', function () {//слушателям вешаем ф-цию removeTask
            removeTask(this);
        });
        text.classList.add('app__list-text');
        text.addEventListener('click', function () {
            doneTask(this);
        });
        switch (el.taskState) { //проверка taskState на выполнен или текущий
            case 'done':
                item.classList.add('app__list-item', 'app__list-item--done');
                break;
            default:
                item.classList.add('app__list-item');
        }
        item.id = el.taskId;
        text.innerHTML = el.taskContent;
        item.appendChild(text);
        item.appendChild(remove);
        tasksList.appendChild(item);
    }

    function doneTask(el) {
        let elem = el.parentNode,//род нода li
            elemId = elem.id,
            elemState = elem.classList.contains('app__list-item--done');//содержит ли эл done(если да, то true)
            //взависим состояния,определ из какого массива нужно удалять tasks и в какой добавл(из current в done,либо наоборот)
        const [itemsRemove, itemsAdd] = elemState ? [tasks.done, tasks.current] : [tasks.current, tasks.done];
        elem.classList.toggle('app__list-item--done');
        for (const [index, item] of itemsRemove.entries()) { //сверяем Id
            if (item.taskId !== elemId) continue;
            itemsAdd.push(item);
            itemsRemove.splice(index, 1);
        }
        doneTasks.innerHTML = tasks.doneTasks;//обновл кол-во выполн tasks
    }

    function removeTask(el) { //нахожд массива из какого будем удалять эл
        let removeEl = el.parentNode,
            removeElId = removeEl.id,
            removeElState = removeEl.classList.contains('app__list-item--done');

        removeEl.remove();
        const items = removeElState ? tasks.done : tasks.current;
        for (const [index, item] of items.entries()) {
            if (item.taskId !== removeElId) continue;
            items.splice(index, 1);
        }
        allTasks.innerHTML = tasks.allTasks;
        doneTasks.innerHTML = tasks.doneTasks;
    }

    function addTasks(str) {
        let elem = {
            taskId: doId(),
            taskContent: str,
            taskState: "current"
        };
        tasks.current.push(elem);
        createItem(elem);
        allTasks.innerHTML = tasks.allTasks;
    }

    function doId() {
        return Math.random().toString(36).substr(2, 16);
    }

    INIT();

    addNewTaskField.addEventListener('keyup',function (e) {
        if(e.keyCode === 13) {
            addTasks(this.value);
            this.value = "";
        }
    })

})();
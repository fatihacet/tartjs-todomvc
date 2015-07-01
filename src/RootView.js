goog.provide('todomvc.RootView');
goog.require('tart.ui.View');



/**
 *
 * @constructor
 * @extends {tart.ui.DlgComponent}
 */
todomvc.RootView = function() {
    goog.base(this);
};
goog.inherits(todomvc.RootView, tart.ui.DlgComponent);


/**
 * @override
 */
todomvc.RootView.prototype.templates_base = function() {
    return '<view id="' + this.getId() + '">' +
        this.templates_section() +
        this.templates_footer() +
        '</view>';
};


/**
 * @return {string} Main section template.
 */
todomvc.RootView.prototype.templates_section = function() {
    return '<section class="todoapp">' +
        '<header class="header">' +
        '<h1>todos</h1>' +
        '<input class="new-todo" placeholder="What needs to be done?" autofocus>' +
        '</header>' +
        '<!-- This section should be hidden by default and shown when there are todos -->' +
        '<section class="main">' +
        '<input class="toggle-all" type="checkbox">' +
        '<label for="toggle-all">Mark all as complete</label>' +
        '<ul class="todo-list">' +
        '<!-- These are here just to show the structure of the list items -->' +
        '<!-- List items should get the class `editing` when editing and `completed` when marked as completed -->' +
        '<li class="completed">' +
        '<div class="view">' +
        '<input class="toggle" type="checkbox" checked>' +
        '<label>Taste JavaScript</label>' +
        '<button class="destroy"></button>' +
        '</div>' +
        '<input class="edit" value="Create a TodoMVC template">' +
        '</li>' +
        '<li>' +
        '<div class="view">' +
        '<input class="toggle" type="checkbox">' +
        '<label>Buy a unicorn</label>' +
        '<button class="destroy"></button>' +
        '</div>' +
        '<input class="edit" value="Rule the web">' +
        '</li>' +
        '</ul>' +
        '</section>' +
        '<!-- This footer should hidden by default and shown when there are todos -->' +
        '<footer class="footer">' +
        '<!-- This should be `0 items left` by default -->' +
        '<span class="todo-count"><strong>0</strong> item left</span>' +
        '<!-- Remove this if you don\'t implement routing -->' +
        '<ul class="filters">' +
        '<li>' +
        '<a class="selected" href="#/">All</a>' +
        '</li>' +
        '<li>' +
        '<a href="#/active">Active</a>' +
        '</li>' +
        '<li>' +
        '<a href="#/completed">Completed</a>' +
        '</li>' +
        '</ul>' +
        '<!-- Hidden if no completed items are left ↓ -->' +
        '<button class="clear-completed">Clear completed</button>' +
        '</footer>' +
        '</section>';
};


/**
 * @return {string} Footer template.
 */
todomvc.RootView.prototype.templates_footer = function() {
    return '<footer class="info">' +
        '<p>Double-click to edit a todo</p>' +
        '<p>Template by <a href="http://sindresorhus.com">Sindre Sorhus</a></p>' +
        '<p>Created by <a href="http://todomvc.com">you</a></p>' +
        '<p>Part of <a href="http://todomvc.com">TodoMVC</a></p>' +
        '</footer>';
};

// Create a tray icon as a test
var tray = new nw.Tray({ title: 'Tray' });

// Give it a menu
var menu = new nw.Menu();
menu.append(new nw.MenuItem({  label: 'Click Me', click: function () {
    // do nothing
}}, ));
tray.menu = menu;
const root = document.documentElement;
const base_input = document.getElementById("base");
const gutter_input = document.getElementById("gutter");
const max_width_input = document.getElementById("max_width");

base_input.addEventListener("change", e => {
    root.style.setProperty('--base_size', base_input.value+"px");
});

gutter_input.addEventListener("change", e => {
    root.style.setProperty('--gutter', base_input.value+"em");
});

max_width_input.addEventListener("change", e => {
    root.style.setProperty('--max_width', base_input.value+"px");
});

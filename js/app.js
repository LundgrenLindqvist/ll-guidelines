const root = document.documentElement;
const base_input = document.getElementById("base");
const max_width_input = document.getElementById("max_width");
const outer_margin_input = document.getElementById("outer_margin");
const gutter_input = document.getElementById("gutter");
const padding_input = document.getElementById("padding");
const color_base_input = document.getElementById("color_base");
const color_contrast_input = document.getElementById("color_contrast");
const color_accent_input = document.getElementById("color_accent");

base_input.addEventListener("change", e => {
    root.style.setProperty('--base_size', base_input.value+"px");
});

max_width_input.addEventListener("change", e => {
    root.style.setProperty('--max_width', max_width_input.value+"px");
});

outer_margin_input.addEventListener("change", e => {
    root.style.setProperty('--outer_margin', outer_margin_input.value+"em");
});

gutter_input.addEventListener("change", e => {
    root.style.setProperty('--gutter', gutter_input.value+"em");
});

padding_input.addEventListener("change", e => {
    root.style.setProperty('--padding', padding_input.value+"em");
});

color_base.addEventListener("change", e => {
    root.style.setProperty('--color_base', color_base.value);
});

color_contrast.addEventListener("change", e => {
    root.style.setProperty('--color_contrast', color_contrast.value);
});

color_accent.addEventListener("change", e => {
    root.style.setProperty('--color_accent', color_accent.value);
});

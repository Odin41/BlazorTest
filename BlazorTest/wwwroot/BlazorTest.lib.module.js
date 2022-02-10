export function beforeStart(options, extensions) {
    console.log("beforeStart");
}

export function afterStarted(blazor) {
    console.log("afterStarted");
    //$(document).ready(() => {
        $('[data-bs-toggle="tooltip"]').tooltip();
        $('[data-toggle="tooltip"]').tooltip();
    //});
}
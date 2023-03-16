function started(){
    console.log("Download Stareted")
}
function update(progress){
    console.log(progress + "% of Download")

}
function completed(){
    console.log("Download Completed")
}
function perdormDownload(fn_s, fn_u, fn_c){
    fn_s();

    for (let i = 0; i <=100; i++) {
        fn_u(i);
    }
    fn_c();
}
perdormDownload(started, update, completed);

//ex PART4

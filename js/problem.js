function add_link() {
    var problem_id_q0dsah6q4v2ex6oh4 = location.href.split("=")[1];
    /*
    $.getJSON("./result.json", function (result) {
        var result = result.sort();
        vm.problems = result
    });*/
    $.getJSON("https://ruanx.pw/bzojch/result.json", function (result) {
        for(let i in result) {
            if(result[i][0]==problem_id_q0dsah6q4v2ex6oh4) {
                console.log(result[i]);
                document.getElementsByTagName("h2")[0].innerText += "\n";
                document.getElementsByTagName("h2")[0].innerText += "此题也在下列 OJ 中可提交：\n";
                document.getElementsByTagName("h2")[0].innerText += result[i][4] +"\n";
                document.getElementsByTagName("h2")[0].innerText += result[i][6] +"\n";
            }
        }
    });

}
if (document.getElementsByTagName("h2")[0].innerText === "Please contact lydsy2012@163.com!") {
    add_link();
} else {
}


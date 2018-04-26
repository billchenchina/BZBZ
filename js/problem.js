ojLink = function(pid) {
  return pid
    .replace(/^Luogu([0-9]+)$/, "https://www.luogu.org/problemnew/show/P$1")
    .replace(/^Loj([0-9]+)$/, "https://loj.ac/problem/$1")
    .replace(/^Codevs([0-9]+)$/, "http://codevs.cn/problem/$1/")
    .replace(
      /^Cogs([0-9]+)$/,
      "http://cogs.pro:8080/cogs/problem/problem.php?pid=$1"
    )
    .replace(/^Vijos([0-9]+)$/, "https://vijos.org/p/$1");
};

appendLink = function(url, title) {
  const ele = document.getElementsByTagName("h2");
  var link = document.createElement("a");
  link.href = url;
  link.text = title + "\n";
  ele[0].appendChild(link);
};

function add_link() {
  var problem_id_q0dsah6q4v2ex6oh4 = location.href.split("=")[1];
  /*
    $.getJSON("./result.json", function (result) {
        var result = result.sort();
        vm.problems = result
    });*/
  $.getJSON("https://aker.club/bzojch/result.json", function(result) {
    for (let i in result) {
      if (result[i][0] == problem_id_q0dsah6q4v2ex6oh4) {
        console.log(result[i]);

        var res1 = result[i][4];
        var res2 = result[i][6];

        console.log(ojLink(res1));
        console.log(ojLink(res2));
        const ele = document.getElementsByTagName("h2");
        ele[0].innerText = "找到如下链接(点击进入):" + "\n";
        appendLink(ojLink(res1), res1);
        appendLink(ojLink(res2), res2);
      }
    }
  });
}
add_link();

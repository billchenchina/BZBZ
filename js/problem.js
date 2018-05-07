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

_add_link = function(problem_id) {
  var problem_id = location.href.split("=")[1];
  chrome.storage.local.get(["bzoj_json"], function(result){
    for (let i in result.bzoj_json) {
      if (result.bzoj_json[i][0] == problem_id) {
        console.log(result.bzoj_json[i]);

        var res1 = result.bzoj_json[i][4];
        var res2 = result.bzoj_json[i][6];

        console.log(ojLink(res1));
        console.log(ojLink(res2));
        const ele = document.getElementsByTagName("h2");
        ele[0].innerText += "\n找到如下链接(点击进入):" + "\n";
        appendLink(ojLink(res1), res1);
        appendLink(ojLink(res2), res2);
      }
    }
  });
}

function add_link() {
  chrome.storage.local.get(["bzoj_json"], function(result){
    if(result.bzoj_json == null) {
      console.log("Data Not Found, Downloading");
      $.getJSON("https://ruanx.pw/bzojch/result.json", function(result) {
        chrome.storage.local.set({"bzoj_json": result}, _add_link);
      });
    } else {
      console.log("Using local cache");
      _add_link();
    }
  });



}
add_link();

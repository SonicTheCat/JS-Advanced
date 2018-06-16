function search() {
    let input = $("#searchText").val();
    let elements = $(`ul#towns li:contains(${input})`);
    elements.css("font-weight", "bold");
    $(`ul#towns li:not(:contains(${input}))`).css("font-weight", "");
    $("#result").text(elements.length + " matches found.");
}

//another solution

/*
function search() {
    let matches = 0;
 let val = $("#searchText").val();
 ($("#towns li")).each((index, el) => {
      if (el.textContent.includes(val)) {
          $(el).css("font-weight", "bold");
          matches++;
      } else{
          $(el).css("font-weight", "");
      }
  });
 $("#result").text(matches + " matches found.")
}
*/
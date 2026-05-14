(async function a() {
  console.log("开始请求 Coze...");
  const url = "https://b54fj4f7wv.coze.site/run";

  const headers = {
    Authorization:
      "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZiZTE0YzcyLWZmMDgtNDdjMi1iMmEyLTMzNDg1M2IzOTE2OCJ9.eyJpc3MiOiJodHRwczovL2FwaS5jb3plLmNuIiwiYXVkIjpbIkYwVnpSM1JYcWZKc2h6Z1FPdnF5WHBLd1duTzNKY01rIl0sImV4cCI6ODIxMDI2Njg3Njc5OSwiaWF0IjoxNzc4NDY1MjA1LCJzdWIiOiJzcGlmZmU6Ly9hcGkuY296ZS5jbi93b3JrbG9hZF9pZGVudGl0eS9pZDo3NjM3ODI3NDc0MTk3MzE1NjMwIiwic3JjIjoiaW5ib3VuZF9hdXRoX2FjY2Vzc190b2tlbl9pZDo3NjM4NDQ5ODk0MjQ3NjI4ODUxIn0.1sREyzQy1W84zJH_yAj-mf0DYGNhngvaDypkGkf81JT8fFtyRCGUOHgh4n-6HQ1sr9g5qOeyn0k6mnQeoQjrV7l1UuUpmyncA7nQdZfAsHt7fghjYuh_jow242CFh9zMR5LXEMpY23E1fyYLFwTEkUtyPVbUVhhQ48zl_GvXZGgj_QmwvU3DVHSioOWftFUVp8gKQu-eO-9i8DE5RRKLoPWyDzQSFE459ogKnji2iRfKoIHnlIQDX9p0EKScS9hppkQmJpqw9nIJlBTl9HgrzeJrZnUbdapEY1isnoDmKW3x4PDNxKXewsg8tY4lHD0783WCm9TWuwwYcBsOrcYMFw",
    "Content-Type": "application/json",
  };
  const response = await fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify({ keyword: "人工智能 AI最新新闻" }),
  });
  const data = await response.json();
  console.log("Coze 返回 JSON:", data);
})();

function fetchGet() {
  const url = 'http://localhost:3000/api/get';
  const param = `username=kingx&password=123456`
  fetch(`${url}?${param}`)
    .then(res => {
      console.log('res: ', res);
      return res.text();
    })
    .then(data => {
      console.log('data:', data);
    })
    .catch(err => {
      console.log(err)
    })
}

// fetchGet();

async function fetchPost() {
  const url = 'http://localhost:3000/api/post';
  const data = {
    username: 'kingx',
    password: '123456'
  }
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  const res = await response.json();
  console.log('res: ', res);
}

fetchPost();

// fetch 图片资源
async function fetchImage() {
  const url = 'http://gips0.baidu.com/it/u=3602773692,1512483864&fm=3028&app=3028&f=JPEG&fmt=auto?w=960&h=1280';
  const response = await fetch(url);
  const blob = await response.blob();
  const objectURL = URL.createObjectURL(blob);
  const image = document.createElement('img');
  image.src = objectURL;
  document.body.appendChild(image);
}

// fetchImage();

// fetch 文件资源
async function fetchFile() {
  const filePath = 'data.json';
  const response = await fetch(filePath);
  const bytes = await response.bytes();
  const content = new TextDecoder().decode(bytes);
  console.log(content);
  document.body.innerHTML = content;
}

// fetchFile();

// fetch 跨域请求，携带cookie
async function fetchCrossOrigin() {
  const url = 'http://localhost:3000/api/post';
  const data = {
    username: 'kingx',
    password: '123456'
  }
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
    // 跨域携带cookie
    credentials: 'include'
  });
  const res = await response.json();
  console.log('res: ', res);
}

// fetch相关demo的项目：https://github.com/mdn/dom-examples/tree/main/fetch
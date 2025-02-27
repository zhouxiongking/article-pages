// fetch 发送get请求
function fetchGet() {
  const url = 'http://localhost:3000/api/get';
  const param = 'username=kingx&password=123456';
  fetch(`${url}?${param}`)
    .then(res => {
      return res.json();
    })
    .then((data) => {
      console.log('data: ', data);
    })
}

// fetchGet();

// fetch 发送post请求
async function fetchPost() {
  const url = 'http://localhost:3000/api/post';
  const data = {
    username: 'kingx-1',
    password: '123456-2'
  };
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

// fetch json文件资源
async function fetchFile() {
  const url = 'data.json';
  const response = await fetch(url);
  const bytes = await response.bytes();
  const content = new TextDecoder().decode(bytes);
  document.body.innerHTML = content;
}

fetchFile();

// fetch 跨域请求，携带cookie
async function fetchCrossOrigin() {
  const url = 'http://localhost:3000/api/post';
  const data = {
    username: 'kingx-1',
    password: '123456-2'
  };
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
    credentials: 'include'
  });
  const res = await response.json();
  console.log('res: ', res);
}
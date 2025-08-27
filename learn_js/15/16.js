async function getUserInfo(userId) {
  // 여기에 코드를 작성하세요
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    if (!res.ok) throw new Error('에러 발생함');
    const { name, email } = await res.json();
    console.log(`Q2: Name: ${name}, Email: ${email}`);
  } catch (e) {
    console.error(e);
  }
}

getUserInfo(1); // Name: Leanne Graham, Email: Sincere@april.biz

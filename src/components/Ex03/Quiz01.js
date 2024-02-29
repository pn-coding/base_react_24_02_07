const data = [
  {
    id: 0,
    imgUrl:
      "https://blog.kakaocdn.net/dn/CNxUY/btqw7dnElRU/HuVZgvpT6J8n4aEYFathEk/img.jpg",
    title: "네이버",
    desc: "네이버 바로가기",
    linkUrl: "https://naver.com",
  },
  {
    id: 1,
    imgUrl:
      "https://blog.kakaocdn.net/dn/bPWm4U/btqw8CtgkMu/pYxOoDLchCJHKrRkhElo7k/img.jpg",
    title: "카카오",
    desc: "카카오 바로가기",
    linkUrl: "https://kakao.com",
  },
  {
    id: 2,
    imgUrl:
      "https://blog.kakaocdn.net/dn/c2yJ7I/btqwXeUM6jI/a3WrMGPo9vakaDzQWepkOK/img.jpg",
    title: "유튜브",
    desc: "유튜브 바로가기",
    linkUrl: "https://youtube.com",
  },
];

export const Quiz01 = () => {
  return (
    <div>
      {data.map((con) => (
        <div key={con.id}>
          <a href={con.linkUrl}>
            <img src={con.imgUrl} alt={con.title} />
            <h3>{con.title}</h3>
            <p>{con.desc}</p>
          </a>
        </div>
      ))}
    </div>
  );
};

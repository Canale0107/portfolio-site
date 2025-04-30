export default function Values() {
  return (
    <section id="values">
      <h2>
        <span className="sec-en">MY VALUES</span>
        <span className="sec-ja">大切にする価値観</span>
      </h2>
      <div className="overview__values">
        {[
          {
            label: "美学",
            text: `哲学に通じる強いこだわりを持ち、思考や行動における美しさと一貫性を重んじる。<br />
            論理と感性が交差する場所に、真の美を見出したいと願っている。`,
          },
          {
            label: "平静",
            text: `判断においては常に冷静かつ客観的であることを心がける。<br />
            ただし、感情を排除せず、それもまた人間的な理解の一部として大切にしたい。`,
          },
          {
            label: "公正",
            text: `表面的な対立や単純な二項対立に囚われず、<br />
            背後にある構造や文脈、多様な視点に目を向けて思考することを大切にしている。`,
          },
        ].map((item, i) => (
          <div className="overview__value" key={i}>
            <div className="overview__value-icon">{item.label}</div>
            <p dangerouslySetInnerHTML={{ __html: item.text }} />
          </div>
        ))}
      </div>
    </section>
  );
}

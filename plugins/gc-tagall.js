const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
  const oi = `*@eimycitapq:* ${pesan}`;
  let teks = `*⺀💐 despierten beyos⺀*\n\n ${oi}\n\n - ̗̀  🦋 Iᥒ𝗍ᥱgrᥲᥒ𝗍ᥱs !\n`;
  for (const mem of participants) {
    teks += `꒰꒱ @${mem.id.split('@')[0]}\n`;
  }
  teks += `*└* 𝕵𝖔𝖘𝖘 🫶🏻💗\n\n* 🫶🏻💗*`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i;
handler.admin = true;
handler.group = true;
export default handler;

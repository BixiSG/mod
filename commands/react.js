const Discord = require("discord.js")

async run(message, args) {
        const { text } = args;
        const m = args.message;

        const msg = await message.channel.send(`🔄 | Reacting to **${m.author.username}**'s message...`)

        for (const c of text.toLowerCase()) {
            if (c in map) {
                try {
                    await m.react(map[c])
                } catch (err) {}
            }
        }

        return msg.edit(`✅ | Successfully reacted on **${m.author.username}**'s message with ${text}!`)
    }
}

const map = {
    a: '🇦',
    b: '🇧',
    c: '🇨',
    d: '🇩',
    e: '🇪',
    f: '🇫',
    g: '🇬',
    h: '🇭',
    i: '🇮',
    j: '🇯',
    k: '🇰',
    l: '🇱',
    m: '🇲',
    n: '🇳',
    o: '🇴',
    p: '🇵',
    q: '🇶',
    r: '🇷',
    s: '🇸',
    t: '🇹',
    u: '🇺',
    v: '🇻',
    w: '🇼',
    x: '🇽',
    y: '🇾',
    z: '🇿',
    0: '0⃣',
    1: '1⃣',
    2: '2⃣',
    3: '3⃣',
    4: '4⃣',
    5: '5⃣',
    6: '6⃣',
    7: '7⃣',
    8: '8⃣',
    9: '9⃣',
    '#': '#⃣',
    '*': '*⃣',
    '!': '❗',
    '?': '❓',
}

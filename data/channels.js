export const channels = [
  {
    id: "channel-001",
    name: "SuperSimpleDev",
    image: "images/channels/supersimpledev.jpg",
    verified: true,
    subscribers: 1200000
  },
  {
    id: "channel-002",
    name: "freeCodeCamp.org",
    image: "images/channels/freecodecamp.jpg",
    verified: true,
    subscribers: 11500000
  },
  {
    id: "channel-003",
    name: "GSN Ghost",
    image: "images/channels/gsn-ghost.jpg",
    verified: false,
    subscribers: 125000
  },
  {
    id: "channel-004",
    name: "BlockCraft",
    image: "images/channels/blockcraft.jpg",
    verified: false,
    subscribers: 850000
  },
  {
    id: "channel-005",
    name: "Shinobi Archive",
    image: "images/channels/shinobi-archive.jpg",
    verified: false,
    subscribers: 420000
  },
  {
    id: "channel-006",
    name: "Ed Sheeran",
    image: "images/channels/ed-sheeran.jpg",
    verified: true,
    subscribers: 57800000
  }
];

export function getChannel(channelId) {
  let matchingChannel;
  channels.forEach(channel => {
    if(channel.id === channelId) {
      matchingChannel = channel;
    }
  })
  return matchingChannel;
}
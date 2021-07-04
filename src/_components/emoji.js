const emot = {}

emot['face'] = ['😀', '😁', '😂', '😄', '😃', '😀', '😊', '😉', '😍', '😘', '😚', '😗', '😙', '😜', '😝', '😛', '😳', '😔', '😌', '😒', '😞', '😣', '😢', '😭', '😪', '😥', '😰', '😅', '😓', '😩', '😫', '😨', '😱', '😠', '😡', '😤', '😖', '😆', '😋', '😷', '😎', '😴', '😵', '😲', '😟', '😦', '😧', '😈', '👿', '😮', '😬', '😐', '😕', '😯', '😶', '😇', '😏', '😑', '🙃', '🙄', '☹️', '🤐', '🤑', '🤒', '🤓', '🤔', '🤕', '🙁', '🙂', '🤗', '🤣', '🤠', '🤥', '🤤', '🤢', '🤧', '🤡', '🤖', '🙈', '🙉', '🙊']

emot['heart'] = ['🖤', '💛', '💙', '💜', '💚', '🧡', '❤️', '💔', '💗', '💓', '💕', '💖']

emot['hand'] = ['👍', '👎', '👌', '👊', '✊', '✌️', '👋', '✋', '👐', '👆', '👇', '👉', '👈', '🙌', '🙏', '💪', '🖖', '☝️', '👏', '✍️', '🤘', '🖕', '🤞', '🤙', '🤛', '🤜', '🤚', '🤝', '🤟', '🤲', '💅']

emot['transport'] = ['🚢', '⛵️', '🚤', '⚓️', '🚀', '✈️', '💺', '🚁', '🚂', '🚊', '🚉', '🚞', '🚆', '🚄', '🚅', '🚈', '🚇', '🚝', '🚋', '🚃', '🚎', '🚌', '🚍', '🚙', '🚘', '🚗', '🚕', '🚖', '🚛', '🚚', '🚨', '🚓', '🚔', '🚒', '🚑', '🚐', '🚲', '🚡', '🚟', '🚠', '⛴', '🚜', '🚏', '🛣', '🛤', '🛥', '🛩', '🛫', '🛬', '🛳', '🎫', '🚦', '🚥', '🎠', '🎡', '🎢', '🛴', '🛹️', '🛵', '🛶', '🛷', '🛸']

emot['animal'] = ['🐶', '🐺', '🐱', '🐭', '🐹', '🐰', '🐸', '🐯', '🐨', '🐻', '🐷', '🐽', '🐮', '🐗', '🐵', '🐒', '🐴', '🐑', '🐘', '🐼', '🐧', '🐦', '🐤', '🐥', '🐣', '🐔', '🐍', '🐢', '🐛', '🐝', '🐜', '🐿', '🐞', '🐌', '🐙', '🐚', '🐠', '🐟', '🐬', '🐳', '🐋', '🐄', '🐏', '🐀', '🐃', '🐅', '🐇', '🐉', '🐎', '🐐', '🐓', '🐕', '🐖', '🐁', '🐂', '🐲', '🐡', '🐊', '🐫', '🐪', '🐆', '🐈', '🐩', '🐾', '🦀', '🦁', '🦂', '🕷', '🦃', '🦄', '🦐', '🦑', '🦋', '🦍', '🦊', '🦌', '🦏', '🦇', '🦅', '🦆', '🦉', '🦎', '🦈', '🦓', '🦒', '🦔', '🦕', '🦖', '🦝️', '🦙️', '🦛️', '🦘️', '🦡️', '🦢️', '🦚️', '🦜️', '🦟️', '🐻', '🐃', '🐈', '‍🦗']

emot['family'] = ['👪', '👨‍👦', '👨‍👦‍👦', '👨‍👧', '👨‍👧‍👦', '👨‍👧‍👧', '👨‍👩‍👦', '👩‍👦', '👩‍👦‍👦', '👩‍👧', '👩‍👧‍👦', '👩‍👧‍👧', '👨‍👨‍👦', '👨‍👨‍👦‍👦', '👨‍👨‍👧', '👨‍👨‍👧‍👦', '👨‍👨‍👧‍👧', '👨‍👩‍👦‍👦', '👨‍👩‍👧', '👨‍👩‍👧‍👦', '👨‍👩‍👧‍👧', '👩‍👩‍👦', '👩‍👩‍👦‍👦', '👩‍👩‍👧', '👩‍👩‍👧‍👦', '👩‍👩‍👧‍👧', '💏', '👩‍❤️‍💋‍👨', '👨‍❤️‍💋‍👨', '👩‍❤️‍💋‍👩', '💑', '👩‍❤️‍👨', '👨‍❤️‍👨', '👩‍❤️‍👩', '🧑‍🤝‍🧑', '👫', '👬', '👭']

emot['people'] = ['👶', '👦', '👧', '👨', '👩', '👼', '🤰', '👸', '🤴', '🧔', '🕺', '💃', '🕴️', '🧒', '🧑', '🧕', '🤱', '🤵', '🤵‍♂️', '🤵‍♀️', '🧑', '👨‍🦳️', '👩‍🦳️', '🧑', '👨‍🦱️', '👩‍🦱️', '🧑‍', '👨‍🦲️', '👩‍🦲️', '🧓', '👴', '👵', '🧑', '👨‍🦰️', '👩‍🦰️', '👱', '👱‍♂️', '👱‍♀️', '👰', '👰‍', '👰‍', '🧑‍🎄', '🎅', '🤶', '🙆', '🙆‍♂️', '🙆‍♀️', '🙅', '🙅‍♂️', '🙅‍♀️', '💁', '💁‍♂️', '💁‍♀️', '🙋', '🙋‍♂️', '🙋‍♀️', '🤷', '🤷‍♂️', '🤷‍♀️', '🙍', '🙍‍♂️', '🙍‍♀️', '💆', '💆‍♂️', '💆‍♀️', '💇', '💇‍♂️', '💇‍♀️', '🙎', '🙎‍♂️', '🙎‍♀️', '🤦', '🤦‍♂️', '🤦‍♀️', '👮', '👮‍♂️', '👮‍♀️', '👷', '👷‍♂️', '👷‍♀️', '🧏', '🧏‍♂️', '🧏‍♀️', '💂', '💂‍♂️', '💂‍♀️', '🕵', '🕵️‍♂️', '🕵️‍♀️', '🙇', '🙇‍♂️', '🙇‍♀️', '🧖', '🧖‍♂️', '🧖‍♀️', '👳', '👳‍♂️', '👳‍♀️',]

emot['sport'] = ['🚶', '🚶‍♂️', '🚶‍♀️', '🏃', '🏃‍♂️', '🏃‍♀️', '🧗', '🧗‍♂️', '🧗‍♀️', '🧘', '🧘‍♂️', '🧘‍♀️', '🚵', '🚵‍♂️', '🚵‍♀️', '🚴', '🚴‍♂️', '🚴‍♀️', '⛹', '⛹️‍♂️', '⛹️‍♀️', '🏊', '🏊‍♂️', '🏊‍♀️', '🏄', '🏄‍♂️', '🏄‍♀️', '🤹', '🤹‍♂️', '🤹‍♀️', '🏋', '🏋️‍♂️', '🏋️‍♀️', '🏌', '🏌️‍♂️', '🏌️‍♀️', '🤸', '🤸‍♂️', '🤸‍♀️', '🚣', '🚣‍♂️', '🚣‍♀️', '🤽', '🤽‍♂️', '🤽‍♀️', '🤾', '🤾‍♂️', '🤾‍♀️']

emot['profession'] = ['🧑‍🎓', '👨‍🎓', '👩‍🎓', '🧑‍🎤', '👨‍🎤', '👩‍🎤', '🧑‍🍳', '👨‍🍳', '👩‍🍳', '🧑‍🚒', '👨‍🚒', '👩‍🚒', '🧑‍🤝‍🧑', '👫', '👬', '👭', '🧑‍🦽', '👨‍🦽', '👩‍🦽', '👨‍🦼', '👩‍🦼', '🧑‍🦼', '🧑‍🎨', '👨‍🎨', '👩‍🎨', '🧑‍🦯', '👨‍🦯', '👩‍🦯', '🧑‍🚀', '👨‍🚀', '👩‍🚀', '🧑‍🌾', '👨‍🌾', '👩‍🌾', '🧑‍⚖️', '👨‍⚖️', '👩‍⚖️', '🧑‍🔧', '👨‍🔧', '👩‍🔧', '🧑‍💼', '👨‍💼', '👩‍💼', '🧑‍⚕️', '👨‍⚕️', '👩‍⚕️', '🧑‍💻', '👨‍💻', '👩‍💻', '🧑‍🔬', '👨‍🔬', '👩‍🔬', '🧑‍🏫', '👨‍🏫', '👩‍🏫', '🧑‍🏭', '👨‍🏭', '👩‍🏭', '🧑‍✈️', '👨‍✈️', '👩‍✈️']

emot['food'] = ['☕️', '🍵', '🍶', '🍺', '🍻', '🍸', '🍹', '🍷', '🍴', '🍕', '🍔', '🍟', '🍗', '🍖', '🍝', '🍛', '🍤', '🍱', '🍣', '🍥', '🍙', '🍘', '🍚', '🍜', '🍲', '🍢', '🍡', '🍳', '🍞', '🍩', '🍮', '🍦', '🍨', '🍧', '🎂', '🍰', '🍪', '🍫', '🍬', '🍭', '🍯', '🍎', '🍏', '🍊', '🍋', '🍒', '🍇', '🍉', '🍓', '🍑', '🍈', '🍌', '🍐', '🍍', '🍠', '🍆', '🍅', '🌽', '🌶', '🌭', '🌮', '🌯', '🍾', '🍿', '🥝', '🥑', '🥔', '🥕', '🥒', '🥜', '🥐', '🥖', '🥞', '🥓', '🥙', '🥚', '🥘', '🥗', '🥛', '🥥', '🥦', '🥨', '🥩', '🥪', '🥣', '🥫', '🥟', '🥠', '🥡', '🥧', '🥤', '🥢', '🥭️', '🥬️', '🥯️', '🧂️', '🥮️', '🦞️', '🧁️']

export default emot

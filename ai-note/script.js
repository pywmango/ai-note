document.getElementById('summarize-btn').addEventListener('click', async () => {
    const noteContent = document.getElementById('note-input').value;

    if (!noteContent) {
        alert('请先输入笔记内容');
        return;
    }

    const summarizedNote = await fetchSummary(noteContent);
    displayOutput(summarizedNote);
});

document.getElementById('ask-ai-btn').addEventListener('click', async () => {
    const noteContent = document.getElementById('note-input').value;

    if (!noteContent) {
        alert('请先输入笔记内容');
        return;
    }

    const question = prompt('请输入你的问题：');
    if (question) {
        const aiResponse = await askAI(noteContent, question);
        displayOutput(aiResponse);
    }
});

async function fetchSummary(noteContent) {
    // 这里模拟AI总结笔记的请求。可以替换为实际的API请求
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`简化版笔记：\n${noteContent.slice(0, 100)}...`);
        }, 1000);
    });
}

async function askAI(noteContent, question) {
    // 这里模拟AI回答问题的请求。可以替换为实际的API请求
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`AI回答：这是你笔记内容的相关回答。问题：${question}`);
        }, 1000);
    });
}

function displayOutput(output) {
    const outputDiv = document.getElementById('output');
    outputDiv.textContent = output;
}

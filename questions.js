const data = {

    arrays:[
        "Two Sum",
        "Maximum Subarray",
        "Contains Duplicate",
        "Merge Intervals",
        "Best Time To Buy And Sell Stock"
    ],

    strings:[
        "Valid Anagram",
        "Reverse String",
        "Longest Common Prefix",
        "Palindrome Check"
    ],

    linkedlist:[
        "Reverse Linked List",
        "Detect Cycle",
        "Middle Node"
    ],

    stacks:[
        "Valid Parentheses",
        "Min Stack",
        "Next Greater Element"
    ],

    queues:[
        "Implement Queue",
        "Circular Queue",
        "Queue Using Stacks"
    ],

    trees:[
        "Maximum Depth",
        "Level Order Traversal",
        "Diameter Of Tree"
    ],

    graphs:[
        "DFS Traversal",
        "BFS Traversal",
        "Number Of Islands"
    ],

    dp:[
        "Climbing Stairs",
        "House Robber",
        "Longest Increasing Subsequence"
    ]
};

const params = new URLSearchParams(window.location.search);
const topic = params.get("topic");

document.getElementById("topicTitle").innerText =
    topic.toUpperCase() + " Questions";

const list = document.getElementById("questionList");

if(data[topic]){

    data[topic].forEach((question,index)=>{

        list.innerHTML += `
            <div class="question">
                <h3>${index+1}. ${question}</h3>
            </div>
        `;
    });

}
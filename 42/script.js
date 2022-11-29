const result = document.getElementById('result');
const filter = document.getElementById('filter');

const listItems = [];

getData()

filter.addEventListener('input',(e)=>filterData(e.target.value))

async function getData() {
    // Fetch API 提供了一个 JavaScript 接口，跨网络异步获取资源。
    const res = await fetch('https://randomuser.me/api?results=50');

    const { results } = await res.json()

    result.innerHTML=''

    results.forEach(user => {
        const li = document.createElement('li')

        listItems.push(li)

        li.innerHTML=`

        <img src="${user.picture.large}" alt="${user.name.first}">
        <div class="user-info">
            <h4>${user.name.first} ${user.name.last}</h4>
            <p>${user.location.city}, ${user.location.country}</p>
        </div>

        `

        //  appendChild(newchild) 方法可向当前节点的子节点列表的末尾添加新的子节点
        // insertBefore(newchild, refchild) 方法可向当前节点的子节点列表的开头添加新的子节点
        result.appendChild(li);
    });

}

// 搜索
function  filterData(searchTerm) {   
    listItems.forEach(item=>{
      
        if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
            item.classList.remove('hide');
            
        }else{
            item.classList.add('hide');
        }
    })
}

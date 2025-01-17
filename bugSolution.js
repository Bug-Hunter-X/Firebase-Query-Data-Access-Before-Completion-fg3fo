The correct way to handle this is to use the `.then()` method or `async/await` to ensure the query is completed before accessing the data:

```javascript
// Using async/await
async function getUsers(){
  const query = firebase.firestore().collection('users').where('age', '>', 18);
  const snapshot = await query.get();
  snapshot.forEach(doc => {
    console.log(doc.id, doc.data());
  });
}

// Or using promises
const query = firebase.firestore().collection('users').where('age', '>', 18);
query.get().then((snapshot) => {
  snapshot.forEach(doc => {
    console.log(doc.id, doc.data());
  });
}).catch((error) => {
  console.error('Error getting documents:', error);
});
```
This ensures that the code waits for the query to resolve before accessing the data.  Error handling with `.catch()` is also included for robustness.
// document.addEventListener("DOMContentLoaded", function () {
//     // Clear voting information on page load (for testing purposes)
//     // You may want to remove this line in a production environment
//     clearVotingInfo();

//     // Check if the user has already voted
//     const hasVoted = checkIfVoted();

//     // If the user has already voted, show a message and remove the voting options
//     if (hasVoted) {
//         alert('You have already voted. Come back next year!');
//         removeVotingOptions();
//     } else {
//         // Get the candidates container
//         const candidatesContainer = document.getElementById('candidates');

//         // Add click event listeners to each vote button
//         const voteButtons = document.querySelectorAll('.vote-button');
//         voteButtons.forEach(button => {
//             button.addEventListener('click', function () {
//                 const partyName = button.getAttribute('data-party-name');
//                 vote(partyName);
//             });
//         });
//     }

//     // ... (your existing code)

//     // Function to clear voting information (for testing purposes)
//     function clearVotingInfo() {
//         localStorage.removeItem('voted');
//         localStorage.removeItem('votingStartTime');
//         localStorage.removeItem('timerInterval');
//     }
// });




document.addEventListener("DOMContentLoaded", function () {
    // Check if the user has already voted
    const hasVoted = checkIfVoted();

    // If the user has already voted, show a message and remove the voting options
    if (hasVoted) {
        alert('You have already voted. Come back next year!');
        removeVotingOptions();
    } else {
        // Get the candidates container
        const candidatesContainer = document.getElementById('candidates');

        // Add click event listeners to each vote button
        const voteButtons = document.querySelectorAll('.vote-button');
        voteButtons.forEach(button => {
            button.addEventListener('click', function () {
                const partyName = button.getAttribute('data-party-name');
                vote(partyName);
            });
        });
    }

    // Vote function
    function vote(party) {
        alert(`Vote counted!`);

        // Set a flag in localStorage to indicate that the user has voted
        setVotedFlag();

        // Remove the voting options from the DOM
        removeVotingOptions();

        // You would typically send this vote information to the server for storage.
        // For simplicity, we're just showing an alert here.
    }

    // Function to check if the user has already voted (based on localStorage)
    function checkIfVoted() {
        return localStorage.getItem('voted') === 'true';
    }

    // Function to set a flag in localStorage indicating that the user has voted
    function setVotedFlag() {
        localStorage.setItem('voted', 'true');
    }

    // Function to remove the voting options from the DOM
    function removeVotingOptions() {
        const candidatesContainer = document.getElementById('candidates');
        candidatesContainer.innerHTML = '<p>Voting options are no longer available.</p>';
    }
});
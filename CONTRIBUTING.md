# How to contribute to the project

1. Clone the project onto your machine : 
    > `git clone <URL OF THE REPOSITORY>`  

2. Checkout to the `develop` branch from the `master` branch.
    > `git checkout develop`

3. Pull to get any of the very latest changes to the branch: 
    > `git pull` as you are working on the `develop` branch.
    
4. Checkout from `develop` to your very own feature branch using these guidelines:
    * The pattern to follow resembles this:
        * `ft_"<NAME OF THE FEATURE>"`
    * Then checkout from `develop` using this command:
        * `git checkout -b <YOUR NEW BRANCH NAME>`
        
### Once your feature is ready
* Pull from develop in case some new changes have been pushed in the meantime, using this command:
        > `git pull origin develop`
       
    * Check if the project is still up by running it afterwards and resolve conflicts if need be...
    * Add the new changes and commit by referencing an issue like so:
        > `git add && git commit -m "#4 "SWIFT EXPLANATION OF THE COMMIT"`
        
        This instance shows a commit referencing the issue number 4. Always fetch references on your Gitlab instance.
    * Then push to the **remote repository** by running this command:
        > `git push -u origin "YOUR NEW BRANCH NAME"`

NB: You might be prompted for credentials, type the ones you use to access your **Gitlab account**.
What did the rejected push error message tell you, and why did it happen?



* The error said: ! \[rejected] feature/loyalty-points -> feature/loyalty-points (fetch first) along with a hint that "the remote contains work that you do not have locally." This happened because another clone already pushed a commit to the same branch that I hadn't fetched yet. Git refuses to accept a push that would silently overwrite history it hasn't seen and protecting against accidentally discarding a teammate's work.



2\. What's the actual difference between how you resolved Task 3 (merge) vs Task 4 (rebase)?



* In Task 3, git merge created a new merge commit that has two parent commits where it preserves the exact history of both branches as they diverged and joined together. In Task 4, git rebase rewrote my local commit so it now sits on top of the already-pushed commit like the two changes never actually diverged.



3\. What one habit would have avoided both rejected pushes in this lab?



* Running git fetch or git pull before starting new work on a shared branch. Both rejections happened because I made changes without first checking whether the remote had moved on since my last sync.



4\. Which approach — merge or rebase — would you default to on a shared team branch, and why?



* I'd default to merge on a shared branch because rebase rewrites commit history where it is risky if teammates have already pulled the branch and it can cause confusing duplicate commits or force-push conflicts for others. Merge is safer for shared branches since it never rewrites existing commits while rebase is more useful for cleaning up my own local commits before merging them in.


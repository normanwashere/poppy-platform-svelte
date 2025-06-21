src/routes/+page.svelte// ============================================================================
//   File: src/App.svelte (The main application component and router)
// ============================================================================
// <!-- App.svelte -->
/*
<script>
    import { onMount } from 'svelte';
    import { page, user } from './stores.js';
    import Header from './components/Header.svelte';
    import LoginPage from './routes/LoginPage.svelte';
    import DashboardPage from './routes/DashboardPage.svelte';
    import SchedulerPage from './routes/SchedulerPage.svelte';
    import UserManagementPage from './routes/UserManagementPage.svelte';
    import BonusRulesPage from './routes/BonusRulesPage.svelte';
    import UserProfilePage from './routes/UserProfilePage.svelte';

    let currentPage;

    // Subscribe to the 'page' store to reactively switch components
    const unsubscribe = page.subscribe(value => {
        currentPage = value;
    });

    onMount(() => {
        // Check if user data exists in localStorage on startup
        const storedUser = localStorage.getItem('poppy_user');
        if (storedUser) {
            user.set(JSON.parse(storedUser));
            page.set('dashboard');
        }
    });
</script>

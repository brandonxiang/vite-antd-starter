/**
 * Example: React Router Data Mode Features
 *
 * This file demonstrates how to use React Router's Data Mode features
 * including loaders, actions, and useLoaderData hook.
 */

import { useEffect } from 'react';
import { useLoaderData, useNavigate, Form, useActionData } from 'react-router';
import { Button, Card, List, Input, Space, message } from 'antd';
import type { LoaderFunctionArgs, ActionFunctionArgs } from 'react-router';

// Example data type
interface User {
  id: number;
  name: string;
  email: string;
}

interface LoaderData {
  users: User[];
  timestamp: string;
}

interface ActionData {
  success: boolean;
  message: string;
  user?: User;
}

/**
 * Loader Function
 *
 * Loaders are called before the component renders.
 * They provide data to the route component via useLoaderData().
 *
 * Add this to your route configuration:
 * {
 *   path: '/users',
 *   Component: UsersPage,
 *   loader: usersLoader,
 * }
 */
export async function usersLoader({ request }: LoaderFunctionArgs): Promise<LoaderData> {
  // You can access request URL, search params, etc.
  const url = new URL(request.url);
  const search = url.searchParams.get('search') || '';

  // Simulate API call
  const response = await fetch('/api/users?search=' + search);
  const users = await response.json();

  return {
    users,
    timestamp: new Date().toISOString(),
  };
}

/**
 * Action Function
 *
 * Actions handle form submissions and data mutations.
 * They're called when a Form is submitted with method="post"
 *
 * Add this to your route configuration:
 * {
 *   path: '/users',
 *   Component: UsersPage,
 *   loader: usersLoader,
 *   action: usersAction,
 * }
 */
export async function usersAction({ request }: ActionFunctionArgs): Promise<ActionData> {
  const formData = await request.formData();
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;

  try {
    // Simulate API call to create user
    const response = await fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email }),
    });

    if (!response.ok) {
      throw new Error('Failed to create user');
    }

    const user = await response.json();

    return {
      success: true,
      message: 'User created successfully!',
      user,
    };
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

/**
 * Component using Data Router features
 */
export default function UsersPage() {
  const navigate = useNavigate();

  // useLoaderData returns the data from the loader function
  const { users, timestamp } = useLoaderData() as LoaderData;

  // useActionData returns the result from the action function
  const actionData = useActionData() as ActionData | undefined;

  // Show message when action completes
  useEffect(() => {
    if (actionData) {
      if (actionData.success) {
        message.success(actionData.message);
      } else {
        message.error(actionData.message);
      }
    }
  }, [actionData]);

  return (
    <div style={{ padding: '24px' }}>
      <Space direction="vertical" style={{ width: '100%' }} size="large">
        <Card title="Users List" extra={<small>Loaded at: {timestamp}</small>}>
          <List
            dataSource={users}
            renderItem={(user) => (
              <List.Item key={user.id}>
                <List.Item.Meta title={user.name} description={user.email} />
                <Button type="link" onClick={() => navigate(`/users/${user.id}`)}>
                  View Details
                </Button>
              </List.Item>
            )}
          />
        </Card>

        <Card title="Add New User">
          {/* Form component from react-router automatically submits to the action */}
          <Form method="post">
            <Space direction="vertical" style={{ width: '100%' }}>
              <Input name="name" placeholder="Name" required />
              <Input name="email" type="email" placeholder="Email" required />
              <Button type="primary" htmlType="submit">
                Create User
              </Button>
            </Space>
          </Form>
        </Card>

        <Card title="Other Data Router Features">
          <Space direction="vertical">
            <div>
              <strong>useNavigation()</strong> - Get navigation state (loading, submitting)
            </div>
            <div>
              <strong>useFetcher()</strong> - Load/submit data without navigation
            </div>
            <div>
              <strong>useRevalidator()</strong> - Manually revalidate loader data
            </div>
            <div>
              <strong>defer()</strong> - Stream data for progressive loading
            </div>
            <div>
              <strong>Await</strong> - Render deferred data with Suspense
            </div>
          </Space>
        </Card>
      </Space>
    </div>
  );
}

/**
 * Example: User Detail Page with Loader
 */
export async function userDetailLoader({ params }: LoaderFunctionArgs) {
  const userId = params.userId;
  const response = await fetch(`/api/users/${userId}`);

  if (!response.ok) {
    throw new Response('User not found', { status: 404 });
  }

  return response.json();
}

export function UserDetailPage() {
  const user = useLoaderData() as User;
  const navigate = useNavigate();

  return (
    <Card
      title={`User: ${user.name}`}
      extra={<Button onClick={() => navigate('/users')}>Back</Button>}
    >
      <p>
        <strong>ID:</strong> {user.id}
      </p>
      <p>
        <strong>Name:</strong> {user.name}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
    </Card>
  );
}

/**
 * How to add these to your routes:
 *
 * In src/router/menus.tsx:
 *
 * import { UsersOutlined } from '@ant-design/icons';
 * import { lazy } from 'react';
 *
 * const UsersPage = lazy(() => import('@/examples/DataRouterExample'));
 * const UserDetailPage = lazy(() => import('@/examples/DataRouterExample').then(m => ({ default: m.UserDetailPage })));
 *
 * export const dataRoutes: DataRouteConfig[] = [
 *   // ... other routes
 *   {
 *     id: 'users',
 *     path: '/users',
 *     title: 'Users',
 *     icon: <UsersOutlined />,
 *     Component: UsersPage,
 *     loader: usersLoader,
 *     action: usersAction,
 *   },
 *   {
 *     id: 'user-detail',
 *     path: '/users/:userId',
 *     Component: UserDetailPage,
 *     loader: userDetailLoader,
 *     noMenu: true, // Don't show in menu
 *   },
 * ];
 */

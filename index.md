---
title: Core Profile Definitions
layout: default
---

# [![mdEditor](https://www.mdeditor.org/img/mdEditor_logo.png){: style="max-height: 1.3em;"}](https://www.mdeditor.org){: .d-inline-block .align-bottom} {{ page.title }} {% if site.github.latest_release %}<span style="font-size:.5em;" class="text-muted">v{{site.github.latest_release}}</span>{% endif %}
{: .text-info}

{% assign schema = site.data["profile-schema"] %}
{% assign file = site.static_files| where:"basename","profile-schema" | first %}

<div class="card mb-5 mt-5 border-info">
  <h4 class="card-header text-white bg-info">Schema</h4>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">
    <h5 class="list-group-item-header">{{schema.title}}</h5>
    <div><a href="{{ file.path | relative_url }}">{{ site.url }}{{ file.path | relative_url }}</a></div>
    <div>{{schema.description}}</div>
    <!-- <div>Version: <span class="text-success">{{site.github.latest_release}}</span></div> -->
    </li>
  </ul>
</div>

{% assign folders = site.static_files | where_exp:"item", "item.path contains 'resources/profiles'" | group_by_exp: "item",
"item.path | remove: '/resources/' | remove: item.name" %}

{% for folder in folders %}
{% assign name = folder.name | append: "^" | remove :"/^" %}
<div class="card mt-3 mb-5">
  <h4 class="card-header text-info">{{name | capitalize}}</h4>
  <ul class="list-group list-group-flush">
  {% for file in folder.items %}
    {% assign path = name | split:"/" %}
    {% assign data = site.data %}

    {% for itm in path %}
      {% assign data = data[itm] %}
    {% endfor %}

    <li class="list-group-item">
    <h5 class="list-group-item-header">{{data[file.basename].title}}</h5>
    <div><a href="{{ file.path | relative_url }}">{{ site.url }}{{ file.path | relative_url }}</a></div>
    <div>{{data[file.basename].description}}</div>    
    <!-- <div>Version: <span class="text-success">{{site.github.latest_release}}</span></div> -->
    </li>
  {% endfor %}
  </ul>
</div>
{% endfor %}
